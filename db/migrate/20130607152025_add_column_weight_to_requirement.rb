class AddColumnWeightToRequirement < ActiveRecord::Migration
  def change
    add_column :requirements, :weight, :float
  end
end
