# LedWall Web-Director

A WebUI to control one or more [LedWall](https://github.com/nehlsen/LedWall)s

## Usage

1. Create a copy of `devices.json.dist` and name it `devices.json`
2. Edit `devices.json` and setup at least one device
   - `id` simple string to identify the device. only lower case letters recommended
   - `name` a name for the device for you to recognize it. do not choose anything too long as it might not fit into the UI
   - `hostname` the hostname or IP of the device
3. copy `compose-sample-deploy.yaml` and edit to your liking, make sure the previously created `devices.json` is mapped accordingly 
4. `docker-compose up`

## Development

For local development a docker compose config is provided (`compose.yaml`). Just run `docker compose up` and access the UI at `http://localhost:3000`. To install additional libraries etc., I use for example `docker run -it --rm -u node -v $(pwd):/app -w /app node npm install swr`.

## Credits

This Project was created using a starter template from [Learn Next.js](https://nextjs.org/learn).
It at all started here `docker run -it --rm -u node -v $(pwd):/app -w /app -p 3000:3000 node npx create-next-app ledwall-web-director --use-npm`
