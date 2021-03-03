#! /bin/bash
set -euo

export M3_HOST="47.92.151.165:8080"

host=${M3_HOST}
company="wecise"
auth="${company}.admin:admin"
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
