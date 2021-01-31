using MediumMailService.MailService;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace MediumMailService.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MailTestController : ControllerBase
    {
        private readonly MailSendingService _mailService;

        public MailTestController(MailSendingService mailService)
        {
            _mailService = mailService;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var response = await _mailService.SendMail("mail/mailTest", new 
            { 
                Ad = "Mert", 
                Soyad = "Kaygusuz", 
                Subject = "Mail Gönderme Denemesi", 
                GonderilecekAdres = "denememailadresi@gmail.com"
            });
            if (response.IsSuccessStatusCode is false)
                return StatusCode(500, "Mail gönderilemedi! Mail servisi kaynaklı bir hata meydana geldi.");
            return Ok("Mail başarıyla gönderildi.");
        }
    }
}
