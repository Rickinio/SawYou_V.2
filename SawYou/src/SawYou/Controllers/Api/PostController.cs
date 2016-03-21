using Microsoft.AspNet.Mvc;
using Newtonsoft.Json;
using SawYou.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SawYou.Controllers.Api
{
    public class PostController:Controller
    {

        private List<Post> posts = new List<Post>() {
            new Post() {Id=0,CheckInType=Enums.CheckInType.Foursquare,CheckInDescription = "First ChecKIn" },
            new Post() {Id=1,CheckInType=Enums.CheckInType.Foursquare,CheckInDescription = "Second ChecKIn" }
        };

        [HttpGet("api/posts")]
        public JsonResult Get() {
            return Json(posts);
        }
            
    }
}
