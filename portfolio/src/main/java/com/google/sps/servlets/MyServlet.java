package com.google.sps.servlets;
import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.*;
import com.google.gson.Gson;

/** Servlet that returns HTML that contains the page view count. */
@WebServlet("/hi")
public class MyServlet extends HttpServlet {
    private ArrayList<String> messages = new ArrayList<String>(Arrays.asList("Hola", "Hello", "Bonjour", "Privet", "Hei"));
  @Override
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        response.setContentType("text/html;");
        Gson gson = new Gson();
        String json = gson.toJson(messages);
        response.getWriter().println(json);
  }
}
