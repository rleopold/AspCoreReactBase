using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;

public class Startup
{
    public void ConfigureServices(IServiceCollection services)
    {
        services.AddMvc();
    }

    public void Configure(IApplicationBuilder app)
    {
        //CORS for api in DEV
        app.UseCors(builder =>
            builder.WithOrigins("http://localhost:5000", "http://localhost:8080")
            .AllowAnyMethod()
            .AllowAnyHeader()
        );
        app.UseMvc();

        app.Run(async context =>
        {
           await context.Response.WriteAsync("Hello, World!");
        });

    }
}