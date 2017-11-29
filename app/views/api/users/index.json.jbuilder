@users.each do |user|
  json.set! user.id do
    json.extract! user, :id, :username, :email
    if user.image_url
      json.extract! user, :image_url
    else
      json.image_url nil
    end
  end
end
