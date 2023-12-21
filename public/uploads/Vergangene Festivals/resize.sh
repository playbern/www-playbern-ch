#!/bin/bash
for file in *.jpg; do 
	echo "Converting $file"
	convert $file -resize 1024x683^ -gravity center -extent 1024x683 $file
done
