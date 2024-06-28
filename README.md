# github-api-playground

A small playground to play with the github-api

<!-- scripts_start -->
* [all-public-repos.js](./all-public-repos.js)  Creates a output of all public repos 👉 Usage: node all-public-repos_and-write.js "users/ckroeger"
* [all-public-repos_and-write.js](./all-public-repos_and-write.js)  Creates a list of all public repos and add them to README.md 👉 Usage: node all-public-repos_and-write.js "users/ckroeger"
* [js-files-list.js](./js-files-list.js)  Creates a markdown list of all js-files in dir 👉 Usage: node js-files-list.js

<!-- scripts_end -->

# Sources

* [REST API endpoints for repositories - GitHub Docs](https://docs.github.com/en/rest/repos/repos?apiVersion=2022-11-28#list-organization-repositories)

## Required libraries

```shell
npm install axios
```
## Ideas
* change repo-output to markdown-links, order by creation
* create chart with number of public-repos
* create chart with number of followers

## Output

<!-- start -->
```text
Repo ID: 599682253
Repo URL: https://api.github.com/repos/ckroeger/abigail-bloom-portolio-bokoko33
Repo Name: abigail-bloom-portolio-bokoko33
----------------------
Repo ID: 93322909
Repo URL: https://api.github.com/repos/ckroeger/bookmarks
Repo Name: bookmarks
----------------------
Repo ID: 762404240
Repo URL: https://api.github.com/repos/ckroeger/ckroeger
Repo Name: ckroeger
----------------------
Repo ID: 577471915
Repo URL: https://api.github.com/repos/ckroeger/ckroeger.github.io
Repo Name: ckroeger.github.io
----------------------
Repo ID: 616189963
Repo URL: https://api.github.com/repos/ckroeger/d3js-chart
Repo Name: d3js-chart
----------------------
Repo ID: 491455600
Repo URL: https://api.github.com/repos/ckroeger/django-rest
Repo Name: django-rest
----------------------
Repo ID: 605075881
Repo URL: https://api.github.com/repos/ckroeger/generic-mapping-example
Repo Name: generic-mapping-example
----------------------
Repo ID: 660613146
Repo URL: https://api.github.com/repos/ckroeger/gh-image-publish-package
Repo Name: gh-image-publish-package
----------------------
Repo ID: 798842512
Repo URL: https://api.github.com/repos/ckroeger/github-api-playground
Repo Name: github-api-playground
----------------------
Repo ID: 620028514
Repo URL: https://api.github.com/repos/ckroeger/githubscraper
Repo Name: githubscraper
----------------------
Repo ID: 580760113
Repo URL: https://api.github.com/repos/ckroeger/helm-charts
Repo Name: helm-charts
----------------------
Repo ID: 576363980
Repo URL: https://api.github.com/repos/ckroeger/java-js
Repo Name: java-js
----------------------
Repo ID: 116183726
Repo URL: https://api.github.com/repos/ckroeger/jkeystore
Repo Name: jkeystore
----------------------
Repo ID: 726267094
Repo URL: https://api.github.com/repos/ckroeger/jscdn
Repo Name: jscdn
----------------------
Repo ID: 820805953
Repo URL: https://api.github.com/repos/ckroeger/json-tree
Repo Name: json-tree
----------------------
Repo ID: 619560891
Repo URL: https://api.github.com/repos/ckroeger/k8s_cronjob
Repo Name: k8s_cronjob
----------------------
Repo ID: 444477840
Repo URL: https://api.github.com/repos/ckroeger/katacoda-scenarios
Repo Name: katacoda-scenarios
----------------------
Repo ID: 740371572
Repo URL: https://api.github.com/repos/ckroeger/kubernetes
Repo Name: kubernetes
----------------------
Repo ID: 620739047
Repo URL: https://api.github.com/repos/ckroeger/library-example
Repo Name: library-example
----------------------
Repo ID: 553197783
Repo URL: https://api.github.com/repos/ckroeger/local-path-provisioner
Repo Name: local-path-provisioner
----------------------
Repo ID: 519778256
Repo URL: https://api.github.com/repos/ckroeger/log4j-shell-poc
Repo Name: log4j-shell-poc
----------------------
Repo ID: 760332216
Repo URL: https://api.github.com/repos/ckroeger/mapping_test_utils
Repo Name: mapping_test_utils
----------------------
Repo ID: 803237540
Repo URL: https://api.github.com/repos/ckroeger/newman-manager-client
Repo Name: newman-manager-client
----------------------
Repo ID: 817662884
Repo URL: https://api.github.com/repos/ckroeger/nginx-reverse-proxy-example
Repo Name: nginx-reverse-proxy-example
----------------------
Repo ID: 777843235
Repo URL: https://api.github.com/repos/ckroeger/object-vis-playground
Repo Name: object-vis-playground
----------------------
Repo ID: 709160497
Repo URL: https://api.github.com/repos/ckroeger/open-api-playground
Repo Name: open-api-playground
----------------------
Repo ID: 717137878
Repo URL: https://api.github.com/repos/ckroeger/previewer
Repo Name: previewer
----------------------
Repo ID: 661122084
Repo URL: https://api.github.com/repos/ckroeger/qrservice
Repo Name: qrservice
----------------------
Repo ID: 622866775
Repo URL: https://api.github.com/repos/ckroeger/reverse-proxy-mock-mesh
Repo Name: reverse-proxy-mock-mesh
----------------------
Repo ID: 478885158
Repo URL: https://api.github.com/repos/ckroeger/SAY
Repo Name: SAY
----------------------
Total repos: 30
```
<!-- end -->
