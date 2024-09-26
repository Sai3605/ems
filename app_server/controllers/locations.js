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
    address: 'Central Park, NY',
    rating: 5,
    facilities: ['Audio/Visual Equipment', 'Food', 'Seating Available'],
    distance: '100m'
    },{
    name: 'Art Exhibition',
    address: 'Art Gallery, SF',
    rating: 4,
    facilities: ['Audio/Visual Equipment', 'Food'],
    distance: '150m'
    },{
    name: 'Tech Conference',
    address: 'Convention Center, LA',
    rating: 3,
    facilities: ['Food', 'Seating Available','Refreshments Available'],
    distance: '300m'
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
   
   