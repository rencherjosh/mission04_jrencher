using Microsoft.AspNetCore.Mvc;
using mission04_jrencher.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace mission04_jrencher.Controllers
{
    public class BlahController : Controller
    {
        public IActionResult Index ()
        {
            return View();
        }

        [HttpGet]
        public IActionResult gradeCalculator ()
        {
            return View();
        }

        [HttpPost]
        public IActionResult gradeCalculator (gradeCalculator model)
        {
            return View();
        }
    }
}
