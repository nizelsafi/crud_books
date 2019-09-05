#!/bin/bash

#get the database name
read -p "Database name: " name

#get the database password with default
read -p "Password [dbpass]: " pass
pass=${pass:-dbpass}

#get the database creator with default
read -p "Database creator [root]: " user
user=${user:-root}

#execute sql commands with the user
mysql -u $user -p -e "CREATE DATABASE $name;CREATE USER $name@localhost identified by '$pass';GRANT ALL ON $name.* to $name@localhost WITH GRANT OPTION;"

#confirmation message
echo "Created database and user: $name"