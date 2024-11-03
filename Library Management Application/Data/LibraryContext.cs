namespace LibraryAPI.Data;
using LibraryAPI.Models;
using Microsoft.EntityFrameworkCore;

public class LibraryContext : DbContext
{
    public LibraryContext(DbContextOptions<LibraryContext> options) : base(options) { }
    public DbSet<Book> Books { get; set; }
}