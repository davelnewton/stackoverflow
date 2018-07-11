# How come my duplicate also affects the original?

Question: https://stackoverflow.com/questions/51289405

## It doesn't.

Using a made-up data structure since no example is provided, this works fine:

```ruby
pages.dup.each do |p|
  new_page = p.dup

  new_data = new_page['data'].dup

  new_data['layout']    = 'app'
  new_data['permalink'] = "#{new_data['permalink']} whatever"

  new_page['data'] = new_data

  pages << new_page
end
```

## Break up all the things

I prefer seeing smaller methods, testable on their own, roughly:

```ruby
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
```

This also uses `map` to avoid an extra `dup` call on the original `pages`,
and keeps the two arrays separated.
