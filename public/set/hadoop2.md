### 1. When is the earliest point at which the reduce method of a given Reducer can be called?

<a-->Not until all mappers have finished processing all records.

<a-->As soon as at least one mapper has finished processing its input split.

<a-->As soon as a mapper has emitted at least one record.

<a-->It depends on the InputFormat used for the job.<q-->


### 2. Which statement best describes the data path of intermediate key-value pairs?

<a-->Intermediate key-value pairs are written to the local disks of the machines running the map tasks, and then copied to the machine running the reduce tasks.

<a-->Intermediate key-value pairs are written to HDFS. Reducers read the intermediate data from HDFS.

<a-->Intermediate key-value pairs are written to HDFS. Reducers copy the intermediate data to the local disks of the machines running the reduce tasks.
<a-->Intermediate key-value pairs are written to the local disks of the machines running the map tasks, and are then copied to HDFS. Reducers read the intermediate data from HDFS.<q-->


### 3. Which interface should your class implement?

You are developing a combiner that takes as input Text keys, IntWritable values, and emits Text
keys, IntWritable values. Which interface should your class implement?

<a-->Reducer&lt;Text, IntWritable, Text, IntWritable&gt;

<a-->Combiner&lt;Text, IntWritable, Text, IntWritable&gt;

<a-->Mapper&lt;Text, IntWritable, Text, IntWritable&gt;

<a-->Reducer&lt;Text, Text, IntWritable, IntWritable&gt;

<a-->Combiner&lt;Text, Text, IntWritable, IntWritable&gt;<q-->

### 4. Indentify the utility that allows you to create and run MapReduce jobs with any executable or script as the mapper and/or the reducer?
<a-->Hadoop Streaming
<a-->Oozie

<a-->Sqoop

<a-->Flume
<a-->MapRed<q-->

### 5. In writing a MapReduce program to accomplish this situation, can you take advantage of a combiner?

You have a large dataset of key-value pairs, where the keys are strings, and the values are integers. For each unique key, you want to identify the largest integer. 

<a-->Yes. 

<a-->No, a combiner would not be useful in this case.

<a-->Yes, but the number of unique keys must be known in advance.

<a-->Yes, as long as all the keys fit into memory on each node.

<a-->Yes, as long as all the integer values that share the same key fit into memory on each node.<q-->

### 6. Assuming default settings, which best describes the order of data provided to a reducer’s reduce method:

<a-->The keys given to a reducer are in sorted order but the values associated with each key are in no predictable order

<a-->The keys given to a reducer aren’t in a predictable order, but the values associated with those keys always are.

<a-->Both the keys and values passed to a reducer always appear in sorted order.

<a-->Neither keys nor values are in any predictable order.
<q-->

### 7. Indentify the number of failed task attempts:

You wrote a map function that throws a runtime exception when it encounters a control character in input data. The input supplied to your mapper contains 12 such characters totals, spread across 5 file splits. The first 4 file splits each have 2 control characters and the last split has
4 control characters. Indentify the number of failed task attempts you can expect when you run the job with mapred.max.map.attempts set to 4:
<a-->You will have 20 failed task attempts 
<a-->You will have 48 failed task attempts
<a-->You will have 17 failed task attempts
<a-->You will have 5 failed task attempts<q-->

### 8. Which method in the Mapper you should use to implement code for reading the file and populating the associative array?

You want to populate an associative array in order to perform a map-side join. You’ve decided to
put this information in a text file, place that file into the DistributedCache and read it in your
Mapper before any records are processed.
Indentify which method in the Mapper you should use to implement code for reading the file and
populating the associative array?
<a-->configure <a-->combine

<a-->map

<a-->init<q-->

### 9. Which interface is most likely to reduce the amount of intermediate data transferred across the network?

You’ve written a MapReduce job that will process 500 million input records and generated 500
million key-value pairs. The data is not uniformly distributed. Your MapReduce job will create a
significant amount of intermediate data that it needs to transfer between mappers and reduces
which is a potential bottleneck. A custom implementation of which interface is most likely to reduce
the amount of intermediate data transferred across the network?
<a-->Combiner

<a-->Partitioner

<a-->OutputFormat

<a-->WritableComparable

<a-->Writable

<a-->InputFormat<q-->

### 10. Can you use MapReduce to perform a relational join on two large tables sharing a key?

Can you use MapReduce to perform a relational join on two large tables sharing a key? Assume that the two tables are formatted as comma-separated files in HDFS.

<a-->Yes.

<a-->Yes, but only if one of the tables fits into memory

<a-->Yes, so long as both tables fit into memory.

<a-->No, MapReduce cannot perform relational operations.

<a-->No, but it can be done with either Pig or Hive.<q-->



### 11. Where is intermediate data written to after being emitted from the Mapper’s map method?
<a-->Into in-memory buffers that spill over to the local file system (outside HDFS) of the TaskTracker node running the Reducer

You have just executed a MapReduce job. Where is intermediate data written to after being
emitted from the Mapper’s map method?

<a-->Intermediate data in streamed across the network from Mapper to the Reduce and is never written to disk.

<a-->Into in-memory buffers on the TaskTracker node running the Mapper that spill over and are written into HDFS.

<a-->Into in-memory buffers that spill over to the local file system of the TaskTracker node running the Mapper.

<a-->Into in-memory buffers on the TaskTracker node running the Reducer that spill over and are written into HDFS.<q-->

### 12. How will you gather this data for your analysis?

You want to understand more about how users browse your public website, such as which pages

they visit prior to placing an order. You have a farm of 200 web servers hosting your website. How
will you gather this data for your analysis?

<a-->Ingest the server web logs into HDFS using Flume.

<a-->Write a MapReduce job, with the web servers for mappers, and the Hadoop cluster nodes for reduces.

<a-->Import all users’ clicks from your OLTP databases into Hadoop, using Sqoop.

<a-->Channel these clickstreams inot Hadoop using Hadoop Streaming.

<a-->Sample the weblogs from the web servers, copying them into Hadoop using curl.<q-->

### 13. Which invocation correctly passes.mapred.job.name with a value of Example to Hadoop?

You need to run the same job many times with minor variations. Rather than hardcoding all job
configuration options in your drive code, you’ve decided to have your Driver subclass
org.apache.hadoop.conf.Configured and implement the org.apache.hadoop.util.Tool interface.
Indentify which invocation correctly passes.mapred.job.name with a value of Example to Hadoop?
<a-->hadoop MyDrive –D mapred.job.name=Example input output

<a-->hadoop “mapred.job.name=Example” MyDriver input output

<a-->hadoop MyDriver mapred.job.name=Example input output

<a-->hadoop setproperty mapred.job.name=Example MyDriver input output

<a-->hadoop setproperty (“mapred.job.name=Example”) MyDriver input output<q-->

### 14. Indentify what determines the data types used by the Mapper for a given job.

You are developing a MapReduce job for sales reporting. The mapper will process input keys
representing the year (IntWritable) and input values representing product indentifies (Text).
Indentify what determines the data types used by the Mapper for a given job.
<a-->The InputFormat used by the job determines the mapper’s input key and value types.

<a-->The key and value types specified in the JobConf.setMapInputKeyClass and JobConf.setMapInputValuesClass methods

<a-->The data types specified in HADOOP_MAP_DATATYPES environment variable

<a-->The mapper-specification.xml file submitted with the job determine the mapper’s input key and value types.<q-->

### 15. Which best describes how TextInputFormat processes input files and line breaks?

Which best describes how TextInputFormat processes input files and line breaks?

<a-->Input file splits may cross line breaks. A line that crosses file splits is read by the RecordReader of the split that contains the end of the broken line.

<a-->Input file splits may cross line breaks. A line that crosses file splits is read by the RecordReader of the split that contains the beginning of the broken line.

<a-->Input file splits may cross line breaks. A line that crosses file splits is read by the RecordReaders of both splits containing the broken line.

<a-->The input file is split exactly at the line breaks, so each RecordReader will read a series of complete lines.

<a-->Input file splits may cross line breaks. A line that crosses file splits is ignored.
<q-->

### 16. How many keys will be passed to the Reducer’s reduce method?

You have the following key-value pairs as output from your Map task:
(the, 1)
(fox, 1)
(faster, 1)
(than, 1)
(the, 1)
(dog, 1)
How many keys will be passed to the Reducer’s reduce method?

<a-->Six

<a-->Five

<a-->Four

<a-->Two

<a-->One

<a-->Three<q-->

### 17. How will you obtain these user records?

You have user profile records in your OLPT database, that you want to join with web logs you
have already ingested into the Hadoop file system. How will you obtain these user records?
<a-->Pig LOAD command
<a-->HDFS command
<a-->Sqoop import
<a-->Hive LOAD DATA command
<a-->Ingest with Flume agents
<a-->Ingest with Hadoop Streaming<q-->

### 18. What is the disadvantage of using multiple reducers with the default HashPartitioner and distributing your workload across you cluster?

What is the disadvantage of using multiple reducers with the default HashPartitioner and distributing your workload across you cluster?

<a-->By using multiple reducers with the default HashPartitioner, output files may not be in globally sorted order.

<a-->You will not be able to compress the intermediate data.

<a-->You will longer be able to take advantage of a Combiner.

<a-->There are no concerns with this approach. It is always advisable to use multiple reduces.<q-->

### 19. Which InputFormat should you use in conf.setInputFormat class?

Given a directory of files with the following structure: line number, tab character, string:

1abialkjfjkaoasdfjksdlkjhqweroij
2kadfjhuwqounahagtnbvaswslmnbfgy
3kjfteiomndscxeqalkzhtopedkfsikj

You want to send each line as one record to your Mapper. Which InputFormat should you use to complete the line: conf.setInputFormat (___.class) ; ?

<a-->SequenceFileInputFormat

<a-->SequenceFileAsTextInputFormat

<a-->KeyValueFileInputFormat

<a-->BDBInputFormat<q-->

### 20. Which is the best way to make this library available to your MapReducer job at runtime?

You need to perform statistical analysis in your MapReduce job and would like to call methods in the Apache Commons Math library, which is distributed as a 1.3 megabyte Java archive (JAR) file. Which is the best way to make this library available to your MapReducer job at runtime?

<a-->When submitting the job on the command line, specify the –libjars option followed by the JAR file path.

<a-->Have your system administrator copy the JAR to all nodes in the cluster and set its location in the HADOOP_CLASSPATH environment variable before you submit your job.

<a-->Have your system administrator place the JAR file on a Web server accessible to all cluster nodes and then set the HTTP_JAR_URL environment variable to its location.

<a-->Package your code and the Apache Commands Math library into a zip file named JobJar.zip<q-->


### 21. This is called:

The Hadoop framework provides a mechanism for coping with machine issues such as faulty configuration or impending hardware failure. MapReduce detects that one or a number of machines are performing poorly and starts more copies of a map or reduce task. All the tasks run simultaneously and the task finish first are used. This is called:

<a-->Speculative Execution

<a-->Combine

<a-->IdentityMapper

<a-->IdentityReducer

<a-->Default Partitioner<q-->

### 22. All keys used for intermediate output from mappers must:
<a-->Implement WritableComparable.

<a-->Implement a splittable compression algorithm.

<a-->Be a subclass of FileInputFormat.

<a-->Override isSplitable.

<a-->Implement a comparator for speedy sorting.<q-->

### 23. What determines how the JobTracker assigns each map task to a TaskTracker?

On a cluster running MapReduce v1 (MRv1), a TaskTracker heartbeats into the JobTracker on your cluster, and alerts the JobTracker it has an open map task slot.

What determines how the JobTracker assigns each map task to a TaskTracker?

<a-->The location of the InsputSplit to be processed in relation to the location of the node.

<a-->The amount of RAM installed on the TaskTracker node.

<a-->The amount of free disk space on the TaskTracker node.

<a-->The number and speed of CPU cores on the TaskTracker node.

<a-->The average system load on the TaskTracker node over the past fifteen (15) minutes.
<q-->

### 24. Which best describes the file access rules in HDFS if the file has a single block that is stored on data nodes A, B and C?

A client application creates an HDFS file named foo.txt with a replication factor of 3. 

<a-->The file can be accessed if at least one of the data nodes storing the file is available.

<a-->The file will be marked as corrupted if data node B fails during the creation of the file.

<a-->Each data node locks the local file to prohibit concurrent readers and writers of the file.

<a-->Each data node stores a copy of the file in the local file system with the same name as the HDFS file.<q-->

### 25. How many blocks the input file occupies?

In a MapReduce job, you want each of your input files processed by a single map task. How do you configure a MapReduce job so that a single map task processes each input file regardless of how many blocks the input file occupies?

<a-->Write a custom FileInputFormat and override the method isSplitable to always return false.

<a-->Increase the parameter that controls minimum split size in the job configuration.

<a-->Write a custom MapRunner that iterates over all key-value pairs in the entire file.

<a-->Set the number of mappers equal to the number of input files you want to process.<q-->

### 26. Which best describes when the reduce method is first called in a MapReduce job?

<a-->Reducers start copying intermediate key-value pairs from each Mapper as soon as it has completed. The reduce method is called as soon as the intermediate key-value pairs start to arrive.

<a-->Reducers start copying intermediate key-value pairs from each Mapper as soon as it has completed. The programmer can configure in the job what percentage of the intermediate data should arrive before the reduce method begins.

<a-->Reducers start copying intermediate key-value pairs from each Mapper as soon as it has completed. The reduce method is called only after all intermediate data has been copied and sorted.

<a-->Reduce methods and map methods all start at the beginning of a job, in order to provide optimal performance for map-only or reduce-only jobs.<q-->


### 27. What is the best way to accomplish this?

To process input key-value pairs, your mapper needs to lead a 512 MB data file in memory. What is the best way to accomplish this?

<a-->Place the data file in the DistributedCache and read the data into memory in the configure method of the mapper.

<a-->Place the data file in the DistributedCache and read the data into memory in the map method of the mapper.

<a-->Serialize the data file, insert in it the JobConf object, and read the data into memory in the configure method of the mapper.

<a-->Place the data file in the DataCache and read the data into memory in the configure method of the mapper.<q-->

### 28. How many times will the Reducer’s reduce method be invoked?

You have written a Mapper which invokes the following five calls to the OutputColletor.collect method:
```
output.collect (new Text (“Apple”), new Text (“Red”) ) ;
output.collect (new Text (“Banana”), new Text (“Yellow”) ) ;
output.collect (new Text (“Apple”), new Text (“Yellow”) ) ;
output.collect (new Text (“Cherry”), new Text (“Red”) ) ;
output.collect (new Text (“Apple”), new Text (“Green”) ) ;
```
How many times will the Reducer’s reduce method be invoked?

<a-->3

<a-->6

<a-->1

<a-->0

<a-->5<q-->


### 29. What is a Writable?

<a-->Writable is an interface that all keys and values in MapReduce must implement. Classes implementing this interface must implement methods for serializing and deserializing themselves.

<a-->Writable is an abstract class that all keys and values in MapReduce must extend. Classes extending this abstract base class must implement methods for serializing and deserializing themselves

<a-->Writable is an interface that all keys, but not values, in MapReduce must implement. Classes implementing this interface must implement methods for serializing and deserializing themselves.

<a-->Writable is an abstract class that all keys, but not values, in MapReduce must extend. Classes extending this abstract base class must implement methods for serializing and deserializing themselves.<q-->



### 30. Which two resources should you expect to be bottlenecks?

You need to create a job that does frequency analysis on input data. You will do this by writing a Mapper that uses TextInputFormat and splits each value (a line of text from an input file) into individual characters. For each one of these characters, you will emit the character as a key and an InputWritable as the value. As this will produce proportionally more intermediate data than input data, which two resources should you expect to be bottlenecks?

<a-->Disk I/O and network I/O

<a-->Processor and network I/O

<a-->Processor and RAM

<a-->Processor and disk I/O<q-->

### 31. Which project gives you a distributed, Scalable, data store that allows you random, realtime read/write access to hundreds of terabytes of data?

Which project gives you a distributed, Scalable, data store that allows you random, realtime read/write access to hundreds of terabytes of data?

<a-->HBase

<a-->Hue

<a-->Pig

<a-->Hive

<a-->Oozie

<a-->Flume

<a-->Sqoop<q-->

### 32. what would another user see when trying to access this life?

You use the hadoop fs –put command to write a 300 MB file using and HDFS block size of 64 MB.

Just after this command has finished writing 200 MB of this file, what would another user see when trying to access this life?

<a-->They would see no content until the whole file written and closed.

<a-->They would see Hadoop throw an ConcurrentFileAccessException when they try to access this file.

<a-->They would see the current state of the file, up to the last bit written by the command.

<a-->They would see the current of the file through the last completed block.<q-->


### 33. Identify the tool best suited 
Import a portion of a relational database every day as files into HDFS, and generate Java classes to interact with that imported data?

<a-->Sqoop

<a-->Oozie

<a-->Flume

<a-->Hue<q-->

### 34. How many files will be processed by the FileInputFormat.setInputPaths () command when it’s given a path object representing this directory?

You have a directory named jobdata in HDFS that contains four files: _first.txt, second.txt, .third.txt and #data.txt. How many files will be processed by the FileInputFormat.setInputPaths () command when it’s given a path object representing this directory?

<a-->Two, file names with a leading period or underscore are ignored

<a-->Four, all files will be processed

<a-->Three, the pound sign is an invalid character for HDFS file names
<a-->None, the directory cannot be named jobdata

<a-->One, no special characters can prefix the name of an input file<q-->


### 35. Determine the difference between setting the number of reduces to one and settings the number of reducers to zero.

You write MapReduce job to process 100 files in HDFS. Your MapReduce algorithm uses
TextInputFormat: the mapper applies a regular expression over input values and emits key-values
pairs with the key consisting of the matching text, and the value containing the filename and byte
offset. Determine the difference between setting the number of reduces to one and settings the
number of reducers to zero.

<a-->With zero reducers, instances of matching patterns are stored in multiple files on HDFS. With one reducer, all instances of matching patterns are gathered together in one file on HDFS.

<a-->There is no difference in output between the two settings.

<a-->With zero reducers, no reducer runs and the job throws an exception. With one reducer, instances of matching patterns are stored in a single file on HDFS.

<a-->With zero reducers, all instances of matching patterns are gathered together in one file on HDFS. With one reducer, instances of matching patterns are stored in multiple files on HDFS.<q-->

### 36. How many map task attempts will there be?

In a MapReduce job with 500 map tasks, how many map task attempts will there be?

<a-->At least 500.

<a-->Between 500 and 1000.

<a-->At most 500.

<a-->Exactly 500.<q-->



### 37. What does calling the next () method return?

In the reducer, the MapReduce API provides you with an iterator over Writable values. What does
calling the next () method return?

<a-->It returns a reference to the same Writable object each time, but populated with different data.

<a-->It returns a reference to a different Writable object time.

<a-->It returns a reference to a Writable object from an object pool.

<a-->It returns a reference to a Writable object. The API leaves unspecified whether this is a reused object or a new object.

<a-->It returns a reference to the same Writable object if the next value is the same as the previous value, or a new Writable object otherwise.<q-->

### 38. which best describes the behavior of the default partitioner?

Analyze each scenario below and indentify which best describes the behavior of the default partitioner?

<a-->The default partitioner computers the hash of the key and divides that valule modulo the number of reducers. The result determines the reducer assigned to process the key-value pair.

<a-->The default partitioner assigns key-values pairs to reduces based on an internal random number generator.

<a-->The default partitioner implements a round-robin strategy, shuffling the key-value pairs to each reducer in turn. This ensures an event partition of the key space.

<a-->The default partitioner computers the hash of the key. Hash values between specific ranges are associated with different buckets, and each bucket is assigned to a specific reducer.

<a-->The default partitioner computers the hash of the value and takes the mod of that value with the number of reducers. The result determines the reducer assigned to process the key-value pair.<q-->


### 39. Which action should you take to relieve this situation and store more files in HDFS?

You need to move a file titled “weblogs” into HDFS. When you try to copy the file, you can’t. You
know you have ample space on your DataNodes. Which action should you take to relieve this
situation and store more files in HDFS?

<a-->Decrease the block size on your remaining files.

<a-->Increase the block size on all current files in HDFS.

<a-->Increase the block size on your remaining files.

<a-->Increase the amount of memory for the NameNode.

<a-->Increase the number of disks (or size) for the NameNode.

<a-->Decrease the block size on all current files in HDFS.<q-->


### 40. Workflows expressed in Oozie can contain:

Workflows expressed in Oozie can contain:

<a-->Sequences of MapReduce and Pig. These sequences can be combined with other actions including forks, decision points, and path joins.

<a-->Sequences of MapReduce job only; on Pig on Hive tasks or jobs. These MapReduce sequences can be combined with forks and path joins.

<a-->Sequences of MapReduce and Pig jobs. These are limited to linear sequences of actions with exception handlers but no forks.

<a-->Iterntive repetition of MapReduce jobs until a desired answer or state is reached.<q-->

### 41. What the map method accepts and emits?

Which best describes what the map method accepts and emits?

<a-->It accepts a single key-value pairs as input and can emit any number of key-value pair as output, including zero.

<a-->It accepts a single key-value pair as input and emits a single key and list of corresponding values as output.

<a-->It accepts a single key-value pairs as input and can emit only one key-value pair as output.

<a-->It accepts a list key-value pairs as input and can emit only one key-value pair as output.<q-->

### 42. Which format should you use to store this data in HDFS?

You want to perform analysis on a large collection of images. You want to store this data in HDFS
and process it with MapReduce but you also want to give your data analysts and data scientists
the ability to process the data directly from HDFS with an interpreted high-level programming
language like Python. Which format should you use to store this data in HDFS?

<a-->SequenceFiles

<a-->Avro

<a-->JSON

<a-->HTML

<a-->XML

<a-->CSV<q-->

### 43. Which mode of operation in Hadoop allows you to most closely simulate a production cluster while using a single machine?

You want to run Hadoop jobs on your development workstation for testing before you submit them
to your production cluster. Which mode of operation in Hadoop allows you to most closely simulate

a production cluster while using a single machine?

<a-->Run all the nodes in your production cluster as virtual machines on your development workstation.

<a-->Run the hadoop command with the –jt local and the –fs file:///options.

<a-->Run the DataNode, TaskTracker, NameNode and JobTracker daemons on a single machine.

<a-->Run simldooop, the Apache open-source software for simulating Hadoop clusters.<q-->

### 44. How many Mappers will run?

Your cluster’s HDFS block size in 64MB. You have directory containing 100 plain text files, each of
which is 100MB in size. The InputFormat for your job is TextInputFormat. Determine how many
Mappers will run?

<a-->200
<a-->64
<a-->100
<a-->640<q-->

### 45. Which data warehousing software suited for this kind of user?

You have an employee who is a Date Analyst and is very comfortable with SQL. He would like to run ad-hoc analysis on data in your HDFS duster. 
<a-->Hive

<a-->Pig

<a-->Hue

<a-->Sqoop

<a-->Oozie

<a-->Flume

<a-->Hadoop Streaming<q-->

### 46. What is the preferred way to pass a small number of configuration parameters to a mapper or reducer?

What is the preferred way to pass a small number of configuration parameters to a mapper or
reducer?

<a-->As key-value pairs in the jobconf object.

<a-->As a custom input key-value pair passed to each mapper or reducer.

<a-->Using a plain text file via the Distributedcache, which each mapper or reducer reads.

<a-->Through a static variable in the MapReduce driver class (i.e., the class that submits the MapReduce job).<q-->

### 47. which is the correct way of submitting the job to the cluster?

Given a Mapper, Reducer, and Driver class packaged into a jar, which is the correct way of
submitting the job to the cluster?

<a-->hadoop jar MyJar.jar MyDriverClass inputdir outputdir

<a-->jar MyJar.jar

<a-->jar MyJar.jar MyDriverClass inputdir outputdir

<a-->hadoop jar class MyJar.jar MyDriverClass inputdir outputdir<q-->


### 48. What is the difference between a failed task attempt and a killed task attempt?

<a-->A failed task attempt is a task attempt that completed, but with an unexpected status value. A killed task attempt is a duplicate copy of a task attempt that was started as part of speculative execution.

<a-->A failed task attempt is a task attempt that threw an unhandled exception. A killed task attempt is one that was terminated by the JobTracker.

<a-->A failed task attempt is a task attempt that did not generate any key value pairs. A killed task attempt is a task attempt that threw an exception, and thus killed by the execution framework.

<a-->A failed task attempt is a task attempt that threw a RuntimeException (i.e., the task fails). A killed task attempt is a task attempt that threw any other type of exception (e.g., IOException); the execution framework catches these exceptions and reports them as killed.<q-->

### 49. Custom programmer-defined counters in MapReduce are:

<a-->Lightweight devices for bookkeeping within MapReduce programs.

<a-->Lightweight devices for ensuring the correctness of a MapReduce program. Mappers Increment counters, and reducers decrement counters. If at the end of the program the counters read zero, then you are sure that the job completed correctly.

<a-->Lightweight devices for synchronization within MapReduce programs. You can use counters to coordinate execution between a mapper and a reducer.<q-->

### 50. MapReduce is well-suited for all of the following applications EXCEPT?

<a-->Online transaction processing (OLTP) for an e-commerce Website.
<a-->Text mining on a large collections of unstructured documents.
<a-->Analysis of large amounts of Web logs (queries, clicks, etc.).
<a-->Graph mining on a large social network (e.g., Facebook friends network).<q-->

### 51. which node will Hadoop first attempt to run the Map task?

You are running a job that will process a single InputSplit on a cluster which has no other jobs currently running. Each node has an equal number of open Map slots. On which node will Hadoop first attempt to run the Map task?

<a-->The node on which this InputSplit is stored

<a-->The node with the most memory

<a-->The node with the lowest system load

<a-->The node with the most free local disk space<q-->

### 52. How does the NameNode detect that a DataNode has failed?

<a-->When the NameNode fails to receive periodic heartbeats from the DataNode, it considers the DataNode as failed.

<a-->The NameNode does not need to know that a DataNode has failed.

<a-->The NameNode periodically pings the datanode. If the DataNode does not respond, the NameNode considers the DataNode as failed.

<a-->When HDFS starts up, the NameNode tries to communicate with the DataNode and considers the DataNode as failed if it does not respond.



