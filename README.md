#App functionality

------------------------------

#1.Scope
____________________________
This document serves as functional specifications of the application

#1.1Purpose and objectives
____________________________

The purpose of the idea is to share food within your company/group. Is a way of socialize with your group/company and share a your best plates and hopefully eating healthy. Is a way also to get clients if 

#2.Description
___________________________

##2.1Roles: 

```Bash
Admin => Responsible of manage the website
Admin_group => Responsible of aprove the access of the user's when request to join the group/company.
User => Every future member of the group.
```

#3.User Journey

The journeys begins a nice homepage where the user's can read the instructions of the website. Above there is two links one register and one login.

##3.1 Register
Let's start our user's journey within the register action. The user that has not been registered yet has to fill a form. In that form is includes the name, email, password and password confirmation (both required). Once completed the register form, it gets redirect to Groups page, above appears, personal page, +Add group and join group, your groups and trolley as a link. Below the nav bar shows All the groups available with their icons.

###3.2 The group's page

All the groups are displayed. Each group has a button to join button if the current user is not already join that group. Also is showing if the group is Public or Private. 

#####3.2.1 Personal page 

Shows him his profile where he could edit it , a add favourites plates and Notifications

EDIT => Once edit it, save button and redirect to groups page

ADD FAVOURITES PLATES => Appears a modal. Once selected, shows modal "Succesful added" and redirect the user to his personal page with the plate added. 

NOTIFICATIONS => There are six kinds: 
		
	-Group's notification => notifications whether the user has been accepted or not for the groups that the use has applied for.
	
	-Plate's notification (pedidos)=> notifications from other users for one or more speficic plates. The request from users will be showing 				within a tex box with the plate (image and its info) with the day he wants that plate and also have one button to accept or 				rejected the offer.
		-If accepted send notification to his Response's notification.
		-if rejected send notification to his Response's notification
	
	-Response's notification => notifications wether his plate's request has been accepted or rejected.
		-if accepted: message "Your request for the plate "plate name" has been accepted and added to the trolley ready to pay. 				 Expire in hour.
		-if rejected: message "Your request has been rejected"
		
	-Payment's notification => notifications for the payment.
		-Payment that other user has been paid succesfully for that 				 plate with the day which is for.
		
	-Reminder's notification => notifications that remind you which plate, where is the meeting point and when you have to go your 			 purchased.
	
	-Rating's notification => notifications that shows the different ratings that he is gaining for a speficic plate. Also the average. 
	
	
***If you are an admin_group**
	
	-User's notification => which handle the user's request to join the admin_group
		
#####3.2.2 Add group

Once click shows a form modal which has nickname of the group, icon/logo/picture of the company the user paste the link and I do the rest, and option "Protected" or "Public", protected means that only allow users with permision can see the group and post. Public means that any one can see the group and request. Once added message modal "Succesfull "namegroup" added!" and redirect to the groups page.
	
#####3.2.3 Join Group 
Shows you modal to search for a group which contains a 3 search fields by nickname of the group, by location and selected groups available.This modal has one button "Join Group"
	
	-if "join group" shows modal "Request successfull send to "namegroup" 

#####3.2.4 Trolley 
This link is a modal which is showing the plates you want to purchase for.
	
	-With every plate displayed has a button on the right to pay.
	-If pay send Payment's notification and redirect the user to his personal page.

#####3.2.5 Your Groups 
Shows the groups that you are part of. SEARCH ICON => modal that contains filters to search for food or beverage or even for location, ranking. Once done display the stuff requiered. Shows the icons of the groups able to be clicked. Redirect to Group page
 

###3.3 Group page

Shows of the plates for that particular group.

Below stick it at the bottom like the new youtube's app interface. It contains 3 options: 

ADD A PLATE ICON(+) => modal form to add a plate setting the deadline for that food, price of portion, price of whole thing and meeting point number  users max. Once done back to the group page.

SEARCH ICON => modal that contains filters to search for food or beverage or even for location, ranking. Once done display the stuff requiered

CALENDAR ICON => display the calendar with the plates or beverages in desc orden with a button to order if there is a gap for at least one user.Each element has a count down and add to trolley icon. Click in any an appears a Plate/beverage modal.

###3.4 Plate/beverage modal

Once the user click on a plate is redirect to the plate modal which has all the info about the plate/beverage, meeting point and nutritional info, price of portion and price for the whole plate or beverage. Coming also with same count down, any user's left if any and trolley button.



#5.Balsamic frameworks

It will be done online using the balsamic app once the user's flow is reviewed and aproved.








