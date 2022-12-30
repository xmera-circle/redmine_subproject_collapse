# frozen_string_literal: true

module RedmineSubprojectCollapse
  module Hooks
    ##
    # Integrate javascript and stylesheet only when ProjectsController is
    # active.
    #
    class SubprojectHookListener < Redmine::Hook::ViewListener
      include ActionView::Helpers::TagHelper

      def view_layouts_base_html_head(context)
        return unless /Projects/.match?(context[:controller].class.name.to_s)

        javascript_include_tag(:application, plugin: 'redmine_subproject_collapse') +
          stylesheet_link_tag(:subproject, plugin: 'redmine_subproject_collapse')
      end
    end
  end
end
