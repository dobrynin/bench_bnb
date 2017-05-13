json.currentUser do
  json.(user, :id, :username)
end

json.errors user.errors
