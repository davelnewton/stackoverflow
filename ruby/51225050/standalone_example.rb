require 'json'
require 'erb'

s = <<EOF
{
    "result": {
        "2332860": {
            "id": 2332860,
            "name": "NAME 1",
            "capping": {
                "quantity": 1,
                "frequency": 1440
            },
            "status": 0,
            "price": 159,
            "publisher_ad_types": []
        },
        "2335970": {
            "id": 2335970,
            "name": "NAME 2",
            "capping": {
                "quantity": 1,
                "frequency": 1440
            },
            "status": 0,
            "price": 159,
            "publisher_ad_types": []
        },
        "2343470": {
            "id": 2343470,
            "name": "NAME 3",
            "capping": {
                "quantity": 1,
                "frequency": 1440
            },
            "status": 0,
            "price": 170,
            "publisher_ad_types": []
        }
    },
    "request_metadata": {
        "limit": 50,
        "offset": 0,
        "count": 11
    }
}
EOF

obj    = JSON.parse(s)
result = obj['result']

result.each do |id, val|
  id, name = val['id'], val['name']
  puts "ID:   #{id}"
  puts "Name: #{name}"
end

puts '---'

tpl = ERB.new <<-EOF
  <ul>
    <% result.each do |id, val| %>
      <li><%= val['id'] %> - <%= val['name'] %></li>
    <% end %>
  </ul>
EOF

puts tpl.result(binding)
