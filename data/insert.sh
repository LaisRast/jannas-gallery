#!/bin/bash

BASE_URL="http://localhost:8090"

if [[ -z "$PASSWORD" || -z "$IDENTITY" ]]; then
    echo "ERROR: PASSWORD and IDENTITY environment variables must be set."
    exit 1
fi

get_auth_token() {
    local auth_response
    auth_response=$(curl -s -X POST \
        -H "Content-Type: application/json" \
        -d "{\"identity\": \"$IDENTITY\", \"password\": \"$PASSWORD\"}" \
        "$BASE_URL/api/collections/_superusers/auth-with-password")

    echo "$auth_response" | jq -r '.token'
}

insert_art() {
    local title="$1"
    local description="$2"
    local date="$3"
    local image="$4"
    local token="$5"

    local dimensions
    dimensions=$(identify -format "%w %h" "$image")
    local image_width
    local image_height
    image_width=$(echo "$dimensions" | awk '{print $1}')
    image_height=$(echo "$dimensions" | awk '{print $2}')

    local response
    response=$(curl -s -w "%{http_code}" -X POST "$BASE_URL/api/collections/art/records" \
        -H "Authorization: Bearer $token" \
        -F "title=$title" \
        -F "description=$description" \
        -F "date=$date" \
        -F "published=true" \
        -F "image_width=$image_width" \
        -F "image_height=$image_height" \
        -F "image=@$image")

    local http_code
    http_code="${response: -3}"

    if [[ "$http_code" -ne 200 ]]; then
        echo "Error: HTTP $http_code - Response: ${response::-3}"
    fi
}

insert_book() {
    local readable_id="$1"
    local title="$2"
    local date="$3"
    local pdf="$4"
    local cover="$5"
    local token="$6"

    local response
    response=$(curl -s -w "%{http_code}" -X POST "$BASE_URL/api/collections/books/records" \
        -H "Authorization: Bearer $token" \
        -F "readable_id=$readable_id" \
        -F "title=$title" \
        -F "date=$date" \
        -F "pdf=@$pdf" \
        -F "cover=@$cover")

    local http_code
    http_code="${response: -3}"

    if [[ "$http_code" -ne 200 ]]; then
        echo "Error: HTTP $http_code - Response: ${response::-3}"
    fi
}

main() {
    local token
    token=$(get_auth_token)

    if [[ -z "$token" || "$token" == "null" ]]; then
        echo "Failed to fetch authentication token."
        exit 1
    fi

    tail -n +2 "art.csv" | while IFS=',' read -r title description date image; do
        title=$(echo "$title" | xargs)
        description=$(echo "$description" | xargs)
        date=$(echo "$date" | xargs)
        image=$(echo "$image" | xargs)
        insert_art "$title" "$description" "$date" "$image" "$token"
    done

    tail -n +2 "books.csv" | while IFS=',' read -r readable_id title date pdf cover; do
        insert_book "$readable_id" "$title" "$date" "$pdf" "$cover" "$token"
    done
}

main
