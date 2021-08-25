appointments = Appointment.create(
  [
    {
      user_id: 1,
      company_name: "ACME Corporation",
      street_address: "123 Main St",
      city: "New York City",
      state: "NY",
      country: "USA",
      zipcode: 10001,
      company_contact: "Bob Breslin",
      phone: '3312235465',
      email: "bob@bob.com",
      notes: "Set up a meeting with the client. Hopefully they'll buy from us",
      meeting_date: Time.now
    },
    {
      user_id: 1,
      company_name: "PBJ Brothers Automotive",
      street_address: "123 Geary Ave",
      city: "San Francisco",
      state: "CA",
      country: "USA",
      zipcode: 94134,
      company_contact: "John Chung",
      phone: '4155556777',
      email: "johnchung@gmail.com",
      notes: "Client seems hesistant. Call back later",
      meeting_date: Time.now
    },
    {
      user_id: 1,
      company_name: "Bitsch Towing",
      street_address: "55 2nd St",
      city: "Philadelphia",
      state: "PN",
      country: "USA",
      zipcode: 76455,
      company_contact: "Sally McWhorter",
      phone: '8888885675',
      email: "info@btowing.com",
      notes: "Client isn't interested",
      meeting_date: Time.now
    },
    {
      user_id: 1,
      company_name: "Guidos Trash Service",
      street_address: "12345 Sicily Way",
      city: "Atlantic City",
      state: "NJ",
      country: "USA",
      zipcode: 12001,
      company_contact: "Luciano Pavoratti",
      phone: '5556667777',
      email: "lucpav@gmail.com",
      notes: "They expressed interest in our website building services",
      meeting_date: Time.now
    },
    {
      user_id: 1,
      company_name: "Main St Subs",
      street_address: "102 Main St",
      city: "Tigard",
      state: "OR",
      country: "USA",
      zipcode: 97223,
      company_contact: "Rambo Chongway",
      phone: '5033334455',
      email: "info@mainst.com",
      notes: "Client offered me a sandwich",
      meeting_date: Time.now
    },
    {
      user_id: 1,
      company_name: "Meijers",
      street_address: "123 Christway Rd",
      city: "Standale",
      state: "MI",
      country: "USA",
      zipcode: 64123,
      company_contact: "Bill Haeksma",
      phone: '6162238485',
      email: "hr@meijer.com",
      notes: "Client is interested",
      meeting_date: Time.now
    }
      ]
)
