// POST method to add new events
server.post('/events', async (req, res) => {
    try {
      // Extract data from the request body
      const { eventName, orgName, eventDetails, foodDetails, date, time, location } = req.body;
  
      // Create a new event object based on the extracted data
      const newEvent = new Event({
        eventName,
        orgName,
        eventDetails,
        foodDetails,
        date,
        time,
        location,
      });
  
      // Save the new event to the database
      await newEvent.save();
  
      // Send a success response
      res.status(201).json({ message: 'Event created successfully', event: newEvent });
    } catch (error) {
      // Handle errors (like missing fields, validation errors)
      res.status(400).json({ error: 'Failed to create event', details: error.message });
    }
  });
  