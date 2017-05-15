json.currentUser do
  json.(user, :id, :username)
end

json.errors do
  json.array! user.errors
end
