using Microsoft.AspNet.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SawYou.Controllers.Web
{
    public class AppController:Controller
    {
        public ActionResult Index() {
            return View();
        }
    }
}
