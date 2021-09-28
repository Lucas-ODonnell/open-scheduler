# **Open Scheduler** is an app for scheduling appointments. 

* **User** can:
  * Get Leads
	* Set Appointments
	* Join a lead with an appointment
	* Upload Documents under 5mb
	* Download Documents 
	* Write a basic profile
	* Filter appointments, leads, and documents

* User can:
  * Sign In/Sign Up
	* Reset Password
	* Delete Account (Destroy all related appointments, leads, profile information, and documents)


	## **How it works**

	Open Scheduler is built on a Ruby on Rails/Postgresql backend with a React frontend. It is a single page application.

	Storage for documents is handled with Active Storage and Amazon S3. 

	Authentication is handled with the devise and devise-jwt gems.


	The front end stores the current users jwt token in localStorage. On every get, post, put, delete request the jwt token is validated on the backend.


## **Sample**




