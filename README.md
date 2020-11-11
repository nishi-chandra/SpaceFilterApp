# SpaceFilterApp
1.	Loading  Screen without any filter will be having data ,where limit=100;
2.	API -  https://api.spaceXdata.com/v3/launches?limit=100 
3.	Click on any of the Launch year,you will notice the change in URL with the selected launch_year.
4.	It will filter only those records which is having launch_year = selected launch year choosen by user.
5.	You can also directly go and change the URL with any other year and it will give back you the requested data.
6.	API - https://api.spaceXdata.com/v3/launches?limit=100&launch_2006
7.	You can also change the limit value in order to get the number of records as per your need.
8.For Successful Launch, filter will be applied to records having launch_success = true/false(whatever user will select)
9. API - https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true
10.	For Successful Landing, filter will be applied to records where land_success = true/false(whichever user selects)
11.	API - https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true

Note:  This application is mobile responsive which uses media queries to fit the screen in different viewport:
1.	Page will have 1 column until 700px i.e. Mobile View
2.	Page will have 2 columns between 700px to 1024px i.e. Tab View
3.	Page will have 4 columns between 1024px to 1440px i.e. Laptops & Desktop View
4.	Beyond 1440px the screen will be center aligned with max width of 1440px.
