## Website Performance Optimization portfolio project

Project to optimize website based on frame rate and google pagespeed insights scores

Related course: [Critical Rendering Path course](https://www.udacity.com/course/ud884).

### Getting started

####Part 1: Optimize PageSpeed Insights score for index.html

Some useful tips to help you get started:

1. Check out the repository
2. To inspect the site on your phone, you can run a local server

  ```bash
  $> cd /path/to/your-project-folder
  $> python GzupSimpleHttpServer.py
  ```

3. Open a browser and visit localhost:8000

  ``` bash
  $> cd /path/to/your-project-folder
  $> ./ngrok http 8000
  ```

4. Copy the public URL ngrok gives you and try running it through PageSpeed Insights!

####Part 2: Optimize Frames per Second in pizza.html

1. Open views/pizza.html in a chrome browser

2. Open developer tools and navigate to timeline

3. Record a timeline trace and view the frames per second chart
