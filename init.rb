# frozen_string_literal: true

require File.expand_path('lib/redmine_subproject_collapse', __dir__)

Redmine::Plugin.register :redmine_subproject_collapse do
  name 'Sub Projects Collapse Plugin'
  author 'Anton Sergeev'
  description 'This plugin provides ability to collapse sub projects'
  version '0.1.0'
  url 'https://github.com/anton-sergeev/redmine_subproject_collapse'
  author_url 'https://github.com/anton-sergeev'
end
