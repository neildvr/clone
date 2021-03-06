module Spree
  class ShippingRateSerializer < ActiveModel::Serializer
    attributes  :id,
                :name,
                :cost,
                :selected,
                :display_cost

    has_one :shipping_method, serializer: ShippingMethodSerializer

  end
end
