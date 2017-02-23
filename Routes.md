Prefix Verb   URI Pattern                       Controller#Action
 order_statuses GET    /order_statuses(.:format)         order_statuses#index
                POST   /order_statuses(.:format)         order_statuses#create
   order_status GET    /order_statuses/:id(.:format)     order_statuses#show
                PATCH  /order_statuses/:id(.:format)     order_statuses#update
                PUT    /order_statuses/:id(.:format)     order_statuses#update
                DELETE /order_statuses/:id(.:format)     order_statuses#destroy

         groups GET    /groups(.:format)                 groups#index
                POST   /groups(.:format)                 groups#create
          group GET    /groups/:id(.:format)             groups#show
                PATCH  /groups/:id(.:format)             groups#update
                PUT    /groups/:id(.:format)             groups#update
                DELETE /groups/:id(.:format)             groups#destroy

     categories GET    /categories(.:format)             categories#index
                POST   /categories(.:format)             categories#create
       category GET    /categories/:id(.:format)         categories#show
                PATCH  /categories/:id(.:format)         categories#update
                PUT    /categories/:id(.:format)         categories#update
                DELETE /categories/:id(.:format)         categories#destroy

   publications GET    /publications(.:format)           publications#index
                POST   /publications(.:format)           publications#create
    publication GET    /publications/:id(.:format)       publications#show
                PATCH  /publications/:id(.:format)       publications#update
                PUT    /publications/:id(.:format)       publications#update
                DELETE /publications/:id(.:format)       publications#destroy

           tags GET    /tags(.:format)                   tags#index
                POST   /tags(.:format)                   tags#create
            tag GET    /tags/:id(.:format)               tags#show
                PATCH  /tags/:id(.:format)               tags#update
                PUT    /tags/:id(.:format)               tags#update
                DELETE /tags/:id(.:format)               tags#destroy

        ratings GET    /ratings(.:format)                ratings#index
                POST   /ratings(.:format)                ratings#create
         rating GET    /ratings/:id(.:format)            ratings#show
                PATCH  /ratings/:id(.:format)            ratings#update
                PUT    /ratings/:id(.:format)            ratings#update
                DELETE /ratings/:id(.:format)            ratings#destroy

notification_types GET    /notification_types(.:format)     notification_types#index
                POST   /notification_types(.:format)     notification_types#create
notification_type GET    /notification_types/:id(.:format) notification_types#show
                PATCH  /notification_types/:id(.:format) notification_types#update
                PUT    /notification_types/:id(.:format) notification_types#update
                DELETE /notification_types/:id(.:format) notification_types#destroy
                
  notifications GET    /notifications(.:format)          notifications#index
                POST   /notifications(.:format)          notifications#create
   notification GET    /notifications/:id(.:format)      notifications#show
                PATCH  /notifications/:id(.:format)      notifications#update
                PUT    /notifications/:id(.:format)      notifications#update
                DELETE /notifications/:id(.:format)      notifications#destroy

          meals GET    /meals(.:format)                  meals#index
                POST   /meals(.:format)                  meals#create
           meal GET    /meals/:id(.:format)              meals#show
                PATCH  /meals/:id(.:format)              meals#update
                PUT    /meals/:id(.:format)              meals#update
                DELETE /meals/:id(.:format)              meals#destroy

 order_requests GET    /order_requests(.:format)         order_requests#index
                POST   /order_requests(.:format)         order_requests#create
  order_request GET    /order_requests/:id(.:format)     order_requests#show
                PATCH  /order_requests/:id(.:format)     order_requests#update
                PUT    /order_requests/:id(.:format)     order_requests#update
                DELETE /order_requests/:id(.:format)     order_requests#destroy

       register POST   /register(.:format)               authentications#register
          login POST   /login(.:format)                  authentications#login
