using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using static SawYou.Models.Enums;

namespace SawYou.Models
{
    public class Post
    {
        public int Id { get; set; }
        public CheckInType CheckInType { get; set; }
        public string FoursquareVenueId { get; set; }
        public string FoursquareVenueName { get; set; }
        public string FoursquareVenueAddress { get; set; }
        public string Email { get; set; }
        public string CheckInDescription { get; set; }
    }

    
}
