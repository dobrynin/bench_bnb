class Bench < ApplicationRecord
  validates :description, :lat, :lng, presence: true

  def self.in_bounds(bounds)
    minlat, maxlat = bounds[:southWest][:lat], bounds[:northEast][:lat]
    minlng, maxlng = bounds[:southWest][:lng], bounds[:northEast][:lng]
    self.where(lat: minlat..maxlat, lng: minlng..maxlng)
  end

end
