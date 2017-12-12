rm -r .\dist\
ng build --prod --aot
aws s3 cp dist s3://storagease --recursive