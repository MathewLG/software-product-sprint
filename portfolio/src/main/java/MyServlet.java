import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/** Servlet that returns HTML that contains the page view count. */
@WebServlet("/hi")
public class MyServlet extends HttpServlet {

  private int pageViews = 0;

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    pageViews++;

    response.setContentType("text/html;");
    response.getWriter().println("<h1>Hello,friend!</h1>");
  }
}
