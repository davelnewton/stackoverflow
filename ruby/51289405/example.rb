require 'pp'

pages = [
  {
    'name' => 'page 1',
    'data' => {
      'permalink' => 'p1 perma',
      'layout'    => 'p1 layout'
    }
  },

  {
    'name' => 'page 2',
    'data' => {
      'permalink' => 'p2 perma',
      'layout'    => 'p2 layout'
    }
  },
]

def modify_page_data(data)
  new_data = data.dup

  new_data['permalink'] = "#{data['permalink']} whatever"
  new_data['layout'] = 'app'

  new_data
end

def dup_page(page)
  new_page = page.dup
  new_page['data'] = modify_page_data(page['data'])
  new_page
end

new_pages = pages.map(&method(:dup_page))

pp pages.concat(new_pages)

