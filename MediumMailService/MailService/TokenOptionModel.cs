namespace MediumMailService.MailService
{
    public class TokenOptionModel
    {
        public string TokenSecurityKey { get; init; }

        public string MailServiceBaseUrl { get; init; }

        public int TokenExpiration { get; init; }

        public string Issuer { get; init; }
    }
}
