module.exports.homelist = function(req, res) {
    res.render('locations-list', {
        title: 'Event Management System - Find Events Near You',
        pageHeader: {
            title: 'Events',
            strapline: 'Discover events happening around you!'
        },
        sidebar: "Looking for events to attend? Our system helps you find local events that match your interests.",
        locations: [{
            name: 'Music Festival',
            address: 'Charminar, Hyderabad',
            date: '2024-10-25',
            description: 'Join us for an unforgettable day of music at the Central Park Music Festival!',
            rating: 5,
            facilities: ['Audio/Visual Equipment', 'Food', 'Seating Available']
        },{
            name: 'Art Exhibition',
            address: 'DSL Virtue Mall , Hyderabad',
            date: '2024-06-05',
            description: 'A contemporary art exhibition featuring artists from around the world.',
            rating: 4,
            facilities: ['Audio/Visual Equipment', 'Food']
        },{
            name: 'Tech Conference',
            address: 'Next Galleria Mall , Hyderabad',
            date: '2024-09-12',
            description: 'A premier technology conference with keynotes from industry leaders.',
            rating: 3,
            facilities: ['Food', 'Seating Available','Refreshments Available']
        }]
    });
};
    
   module.exports.locationInfo = function(req, res){
    res.render('location-info', { title: 'LocationInfo' });
    };
   module.exports.locationInfo1 = function(req, res){
    res.render('location-info1', { title: 'LocationInfo1' });
    };
   module.exports.locationInfo2 = function(req, res){
    res.render('location-info2', { title: 'LocationInfo2' });
    };
   module.exports.addReview = function(req, res){
    res.render('locations-review-form', { title: 'ADD REVIEW' });
    };
   
   
