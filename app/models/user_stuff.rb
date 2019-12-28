class UserStuff < ApplicationRecord
    validates :user_id, :show_id, presence: true

    belongs_to :user

    belongs_to :show
end