class emp(data):
    def __init__(self,id,data):
        id = id
        date = data
    

obj = emp(123,"12 june")
obj.save()
obj2 = emp(1230,"12 june")
obj.save()

obj.filter("id>12 ")


# id , data
# 123, 12
# 