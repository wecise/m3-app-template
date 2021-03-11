#! /bin/bash
set -euo


host=${M3_HOST}
company="wecise"
auth="${company}.admin:admin1234)(*&"
target="app.zip"

echo
echo '应用发布开始**********************************************************************'
echo
echo '发布地址：'${host}
echo
echo '发布租户：'${company}
echo

curl --location -u "${auth}" -X POST "http://$host/fs/import?issys=true" --form "uploadfile=@${target}"

echo
rm -rf ${target}
echo '应用发布结束**********************************************************************';
