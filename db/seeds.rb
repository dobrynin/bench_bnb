# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.transaction do
  Bench.destroy_all
  benches = [{
    description: "Good Bench",
    lat: 37.807323,
    lng: -122.475999
  }, {
    description: "Great Bench",
    lat: 37.804085,
    lng: -122.407433
  }, {
    description: "Classic Bench",
    lat: 37.759819,
    lng: -122.447054
  }]
  Bench.create!(benches.to_a)
end
