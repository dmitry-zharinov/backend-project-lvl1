#Создайте Makefile с командой install, выполняющей npm ci. Эта команда полезна при первом клонировании репозитория (или после удаления node_modules).

install: # установка
 	# установка модулей из package-lock.json
	npm ci

brain-games: # запуск
	node bin/brain-games.js

lint: # запуск линтера
	npx eslint .

publish:
	npm publish --dry-run