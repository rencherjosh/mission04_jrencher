using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace mission04_jrencher.Models
{
    public class gradeCalculator
    {
        [Required]
        [Range(1, 100)]
        public string assignments { get; set; }
        [Required]
        [Range(1, 100)]
        public string groupProjects { get; set; }
        [Required]
        [Range(1, 100)]
        public string quizzes { get; set; }
        [Required]
        [Range(1, 100)]
        public string midtermExam { get; set; }
        [Required]
        [Range(1, 100)]
        public string finalExam { get; set; }
        [Required]
        [Range(1, 100)]
        public string intex { get; set; }
        public string total { get; set; }
        public string letterGrade { get; set; }

    }
}
