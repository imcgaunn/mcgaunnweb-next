.DEFAULT_GOAL := help
.SHELL := /bin/bash
REGISTRY_URL := registry.digitalocean.com/mcgaunnweb

.PHONY : help
help :
	@echo "make `build-image` to build production site as a docker image"
	@echo "make `publish-image` to log into registry, build image and upload it to said registry"
	@echo "make `registry-login` to log in to docker registry $(REGISTRY_URL)"

.PHONY : build-image
IMAGE_NAME := frontpage
TAG_NAME := latest
FULL_TAG := $(REGISTRY_URL)/$(IMAGE_NAME):$(TAG_NAME)
build-image :
	docker build . -t $(FULL_TAG)

.PHONY : publish-image
publish-image : | registry-login build-image
	docker push $(FULL_TAG)

.PHONY : registry-login
registry-login :
	docker login $(REGISTRY_URL)
