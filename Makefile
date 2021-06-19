
gen-ts-source-code:
	rm -f openapi.json
	wget https://notify.qiyutech.tech/api/openapi.json

	rm -rf tmp

	mkdir -p tmp
	curl -X 'POST' \
	  'https://code.qiyutech.tech/code/gen/file' \
	  -H 'accept: */*' \
	  -H 'Content-Type: multipart/form-data' \
	  -F 'dt_class_name=' \
	  -F 'dt_prefix=' \
	  -F 'stub_class_name=' \
	  -F 'stub_prefix=' \
	  -F 'stub_postfix=' \
	  -F 'dt_postfix=' \
	  -F 'openapi_file=@openapi.json;type=application/json' \
	  -F 'language=typescript' \
	  -F 'path_base_url=https://notify.qiyutech.tech' \
	  --output tmp/code.zip
	cd tmp && unzip code.zip && mv *.ts ../src/
	rm -rf tmp && rm openapi.json
