# Remote configuration
REMOTE_USER = root
REMOTE_HOST = rastanawi.com
REMOTE_POCKETBASE_PATH = /root/pocketbase-janna
REMOTE_WEBSITE_PATH = /var/www/janna

## pocketbase
.PHONY: pocketbase-run
pocketbase-run:
	./pocketbase/pocketbase serve

.PHONY: pocketbase-deploy
pocketbase-deploy:
	rsync -avz -e ssh pocketbase/pocketbase "$(REMOTE_USER)@$(REMOTE_HOST):$(REMOTE_POCKETBASE_PATH)/pocketbase"
	rsync -avz --delete -e ssh pocketbase/pb_migrations/ "$(REMOTE_USER)@$(REMOTE_HOST):$(REMOTE_POCKETBASE_PATH)/pb_migrations/"
	ssh "$(REMOTE_USER)@$(REMOTE_HOST)" 'cd "$(REMOTE_POCKETBASE_PATH)" && ./pocketbase migrate'

.PHONY: pocketbase-download
pocketbase-download:
	curl -L -o pocketbase/pocketbase.zip https://github.com/pocketbase/pocketbase/releases/download/v0.23.12/pocketbase_0.23.12_linux_amd64.zip
	unzip -j -o pocketbase/pocketbase.zip pocketbase -d pocketbase
	rm -f pocketbase/pocketbase.zip

## app
.PHONY: app-deploy
app-deploy:
	vite build --mode prod
	rsync -avz --delete -e ssh dist/ "$(REMOTE_USER)@$(REMOTE_HOST):$(REMOTE_WEBSITE_PATH)/"

.PHONY: app-run
app-run:
	npm run dev

## data
.PHONY: insert-data
insert-data:
	cd data && sh insert.sh
