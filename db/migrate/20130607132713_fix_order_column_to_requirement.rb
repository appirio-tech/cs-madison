class FixOrderColumnToRequirement < ActiveRecord::Migration
  def up
    rename_column :requirements, :order, :order_by
  end

  def down
  end
end
