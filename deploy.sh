#! /bin/bash
set -euo

company="eventbus"
username="admin"
password="admin"
target="app.zip"

auth="${company}.${username}:${password}"
hostTerm=${M3_HOST}
hostPreFix="http://"
host=""
if [[ $hostTerm =~ $hostPreFix ]] 
then
    host=$hostTerm
else
    host="http://$hostTerm"
fi


echo
echo '应用发布开始**********************************************************************'
echo
echo '发布地址：'${host}
echo
echo '发布租户：'${company}
echo

curl --location -u "${auth}" -X POST "$host/fs/import?issys=true" --form "uploadfile=@${target}"

echo
rm -rf ${target}
echo '应用发布结束**********************************************************************';
