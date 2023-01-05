# frozen_string_literal: true

require File.expand_path('lib/redmine_subproject_collapse', __dir__)

Redmine::Plugin.register :redmine_subproject_collapse do
  name 'Sub Projects Collapse Plugin'
  author 'Anton Sergeev, Liane Hampe, xmera Solutions GmbH'
  description 'This plugin provides ability to collapse sub projects'
  version '0.2.0'
  url 'https://circle.xmera.de/projects/redmine-subproject-collapse'
  author_url 'https://github.com/liaham'

  requires_redmine version_or_higher: '4.2'
end
