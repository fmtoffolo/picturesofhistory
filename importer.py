import urllib2
import time

def importer():
	req = urllib2.Request('http://www.reddit.com/r/historyporn/.json?limit=400', headers={'User-Agent': 'Mozilla/5.0'})
	webpage = urllib2.urlopen(req).read()

	f = open('datos.json', 'w')

	f.write(webpage)
	print 'Importer succesfull'
	f.close()

	time.sleep(3600)


while True:
		importer()