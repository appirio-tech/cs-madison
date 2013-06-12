class FixTypeColumnToRequirement < ActiveRecord::Migration
  def up
    rename_column :requirements, :type, :scoring_type
  end

  def down
  end
end
