# occloxium-com 

VueJS front-end webpage used as portfolio page.

VueJS uses webpack to produce a production build. Every required file is bundled into a nginx:alpine docker image (light-weight, 20MB max. size). After primary build stage, the container is deployed to the production environment (<https://www.occloxium.com/>), or, based on the branch we pushed to, the staging environment (<https://staging.occloxium.com/>).

(c) 2020 Alexander Bartolomey
