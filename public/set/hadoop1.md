### 1. Which of the following services run in the Master node of Apache Hadoop in cluster mode (fully distributed mode)?

<a-->JobTracker<a-->TaskTracker<a-->DataNode<a-->Secondary NameNode<q-->
### 2. What is not a main component of Hadoop 2.0 
<a-->None of the rest
<a-->Hadoop Common
<a-->HDFS
<a-->Hadoop YARN
<a-->Map Reduce<q-->
### 3. What is not rightly mentioned about combiner
<a-->Combiner may be called only once for each map output key.
<a-->Combiner is a semi-reducer in Mapreduce framework. 
<a-->It is an optional component.
<a-->None of the rest
<q-->
### 4. What is not rightly mentioned about identity mapper
<a-->None of the rest
<a-->Identity Mapper is a default Mapper class provided by hadoop.
<a-->When no mapper is class is specified in Mapreduce job, then this mapper will be executed.
<a-->It doesn’t process/manipulate/ perform any computation on input
<a-->it simply writes the input data into output
<q-->
### 5. Where does the output from Map tasks get stored
<a-->The Local file system of each individual mapper nodes
<a-->HDFS
<a-->RAM of each individual mapper node<q-->
### 6. In a MapReduce job, the reducer receives all values associated with same key. Which statement best describes the ordering of these values?
<a-->The values are arbitrarily ordered, and the ordering may vary from run to run of the same MapReduce job.
<a-->The values are in sorted order.
<a-->The values are arbitrary ordered, but multiple runs of the same MapReduce job will always have the same ordering.
<a-->Since the values come from mapper outputs, the reducers will receive contiguous sections of sorted values.<q-->
### 7. Identify the Hadoop daemon on which the Hadoop framework will look for an available slot schedule a MapReduce operation.

Your client application submits a MapReduce job to your Hadoop cluster. 

<a-->JobTracker
<a-->TaskTracker
<a-->NameNode
<a-->DataNode
<a-->Secondary NameNode<q-->
### 8. How is High Availability achieved in Hadoop 2.0
<a-->Scale out the number of Name nodes
<a-->Quorum Journal Manager (QJM), 
<a-->NFS for the shared storage
<a-->Quorum Journal Manager (QJM) & NFS for the shared storage
<a-->NFS for the shared storage & Scale out the number of Name nodes
<q-->
### 9. Which of the following statements best describes how a large (100 GB) file is stored in HDFS?
<a--> The file is divided into fixed-size blocks, which are stored on multiple data nodes.Each block is replicated three times by default. Multiple blocks from the same file might reside on the same DataNode.
<a--> The file is divided into fixed-size blocks, which are stored on multiple data nodes. Each block is replicated three times by default. HDFS guarantees that different blocks from the same file are never on the same DataNode.
<a-->The file is replicated three times by default. Each copy of the file is stored on a separate DataNode.
<a-->The master copy of the file is stored on a single DataNode. The replica copies are divided into fixed-size blocks,which are stored on multiple data nodes.
<q-->
### 10. Which of the following describes how a client reads a file from HDFS?
<a-->The client contacts the NameNode for the block location(s). The NameNode then queries the data nodes for block locations. The data nodes respond to the NameNode, and the NameNode redirects the client to the DataNode that holds the requested data block(s). The client then reads the data directly off the DataNode.
<a-->The client queries the NameNode for the block location(s). The NameNode returns the block location(s) to the client. The client reads the data directly off the DataNode(s).
<a-->The client queries all data nodes in parallel. The DataNode that contains the requested data responds directly to the client. The client reads the data directly off the DataNode.
<a-->The client contacts the NameNode for the block location(s). The NameNode contacts the DataNode that holds the requested data block. Data is transferred from the DataNode to the NameNode, and then from the NameNode to the client.<q-->

### 11. In a large MapReduce job with m mappers and n reducers, how many distinct copy operations will there be in the sort/shuffle phase? 
<a-->m*n 
<a-->n 
<a-->m 
<a-->m+n 
<a-->m^n 
<q-->

### 12. The NameNode uses RAM for the following purpose:
<a-->To store filenames, list of blocks, and other meta information
<a-->To store the file contents in HDFS
<a-->To store the edits log that keeps track of changes in HDFS
<a-->To manage distributed read and write locks on files in HDFS
<q-->
### 13.Which of the following commands helps to show the file or directory indication?
<a-->ls –l
<a-->ls
<a-->ls –a
<a-->man ls
<q-->
### 14. Who executes the map job?
<a-->TaskTracker
<a-->NameNode server
<a-->JobTracker
<a-->Secondary NameNode server
<q-->
### 15. What data does a Reducer reduce method process?
<a-->All data for a given key, regardless of which mapper(s) produced it
<a-->All the data in a single input file
<a-->All data produced by a single mapper
<a-->All data for a given value, regardless of which mapper(s) produced it
<q-->
### 16. Run the word count MapReduce program with m mappers and r reducers

 how many output files will you get at the end of the job? And how many key-value pairs will there be in each file? Assume k is the number of unique words in the input files.

<a-->There will be r files, each with approximately k/r key-value pairs
<a-->There will be r files, each with exactly k/r key-value pairs
<a-->There will be r files, each with approximately k/m key-value pairs
<a-->There will be m files, each with exactly k/m key value pairs
<q-->
### 17. Which of the following commands is used to start Pig in Local mode?
<a-->Pig -x local
<a-->Pig -x MapReduce
<a-->Pig
<q-->
### 18. Which of the following syntax is used to perform loading of data from file to create relations in Pig?
<a-->LOAD
<a-->STORE
<a-->GROUP
<a-->FOREACH
<q-->
### 19. Which of the following keywords is used to perform combining in Pig?
<a-->UNION
<a-->LOAD
<a-->STORE
<a-->FOREACH
<q-->
### 20. Which component stores the system catalog and metadata about tables, columns, and partitions in Hive?
<a-->Metastore
<a-->CLI
<a-->Driver
<a-->Thrift Server
<q-->
### 21. Which component compiles HiveQL into a directed acyclic graph of map/reduce tasks?
<a-->Query Compiler
<a-->CLI
<a-->Driver
<a-->Thrift Server
<q-->
### 22. What does Sqoop offer?
<a-->Capability to import and export between database and Hadoop System
<a-->Capability to import the database to the Hadoop System
<a-->Capability to export the database from Hadoop System
<a-->Capability to alter the database and commit the database to the Hadoop System
<q-->
### 23. Which type of scalability is supported by Apache Flume?
<a-->Horizontal Scalability
<a-->Vertical Scalability
<a-->Diagonal Scalability
<a-->No Scalability
<q-->
### 24. Identify the MapReduce v2 (MRv2/YARN) daemon responsible for managing resources required by the NameNode for performing a specific job.
<a-->ResourceManager
<a-->NodeManager
<a-->ApplicationMaster
<a-->TaskTracker
<q-->
### 25. Which happens if the NameNode crashes?
<a-->HDFS becomes unavailable until the NameNode is restored.
<a-->The Secondary NameNode seamlessly takes over and there is no service interruption.
<a-->HDFS becomes unavailable to new MapReduce jobs, but running jobs will continue until completion.
<a-->HDFS becomes temporarily unavailable until an administrator starts redirecting client requests to the Secondary NameNode.
<q-->
### 26. What is the storage capacity of your Hadoop cluster (assuming no compression)?

Your cluster has 10 DataNodes, each with a single 1 TB hard drive. You utilize all your disk capacity for HDFS, reserving none for MapReduce. You implement default replication settings. 

<a-->About 3 TB
<a-->About 5 TB
<a-->About 10 TB
<a-->About 11 TB
<q-->
### 27. What happens in a MapReduce job when you set the number of reducers to zero? 
<a-->No reducer executes, and the output of each mapper is written to a separate file in HDFS 
<a-->No reducer executes, but the mappers generate no output 
<a-->Setting the number of reducers to zero is invalid, and an exception is thrown 
<a-->No reducer executes, but the outputs of all the mappers are gathered together and written to a single file in HDFS
<q-->
### 28. Which of the Following best describes the lifecycle of a Mapper ?
<a-->The TaskTracker spawns a new Mapper to process each key-value pair 
<a-->The TaskTracker spawns a new Mapper to process all records in a single input split 
<a-->The JobTracker spawns a new Mapper to process all records in a single file
<a-->The JobTracker calls the TaksTracker's configure () method, then its map () method and finally its closer ()
<q-->
### 29. For each intermediate key, each reducer task can emit: 
<a-->As many final key-value pairs as desired, as long as all the keys have the same type and all the values have the same type
<a-->One final key value pair per key; no restrictions on the type
<a-->As many final key-value pairs as desired, but they must have the same type as the intermediate key-value pairs
<a-->One final key-value pair per value associated with the key; no restrictions on the type
<q-->
### 30. Determine the difference between setting the number of reducers to zero. 

You write a MapReduce job to process 100 files in HDFS. Your MapReduce algorithm uses TextInputFormat and the IdentityReducer: the mapper applies a regular expression over input values and emits key-value pairs with the key consisting of the matching text, and the value containing the filename and byte offset. 

<a-->With zero reducers, instances of matching patterns are stored in multiple files on HDFS. With one reducer, all instances of matching patterns are gathered together in one file on HDFS 
<a-->With zero reducers, all instances of matching patterns are gathered together in one file on HDFS.
<a-->With one reducer, instances of matching patterns stored in multiple files on HDFS 
<a-->With zero reducers, no reducer runs and the job throws an exception. With one reducer, instances of matching patterns are stored in a single file on HDFS 
<a-->There is no difference in output between the two settings
<q-->
### 31. During the standard sort and shuffle phase of MapReduce, keys and values are passed to reducers. Which of the following is true?
<a-->Keys are presented to a reducer in sorted order; values for a given key are not sorted
<a-->Keys are presented to a reducer in random order; values for a given key are not sorted
<a-->Keys are presented to a reducer in sorted order; values for a given key are sorted in ascending order
<a-->Keys are presented to a reducer in random order; values for a given key are sorted in ascending order 
<q-->
### 32. What is the standard configuration of slave nodes in a Hadoop cluster?
<a-->Each slave node runs a TaskTracker and a DataNode daemon
<a-->Each slave node runs a JobTracker and a DataNode daemon
<a-->Each slave node either runs either a TaskTracker or a DataNode daemon, but not both
<a-->Each slave node runs a TaskTracker, but only a fraction of the slave nodes run DataNode daemons
<a-->Each slave node runs a DataNode daemon, but only a fraction of the slave nodes run TaskTrackers.
<q-->
### 33. You want to count the number of occurrences for each unique word in the supplied input data. You have decided to implement this by having your mapper tokenize each word and emit a literal value 1, and then have your reducer increment a counter for each literal 1 it receives. After successful implementing this, it occurs to you that you could optimize this by specifying a combiner. Will you be able to reuse your existing Reduces as your combiner in this case and why or why not? 
<a-->Yes, because the sum operation is both associative and commutative and the input and output types to the reduce method match 
<a-->No, because the Reducer and Combiner are separate interfaces
<a-->No, because the sum operation in the reducer is incompatible with the operation of a Combiner 
<a-->No, because the Combiner is incompatible with a mapper which doesn’t use the same data type for both the key and value
<a-->Yes, because Java is a polymorphic object-oriented language and thus reducer code can be reused as a combiner
<q-->
### 34. You want to understand more about how users browse your public website, such as which pages they visit prior to placing an order. You have a farm of 200 web servers hosting your website. How will you gather this data for your analysis?
<a-->Ingest the server web logs into HDFS using Flume
<a-->Write a MapReduce job, with the web servers for mappers, and the Hadoop cluster nodes for reduces. 
<a-->Import all users' clicks from your OLTP databases into Hadoop, using Sqoop. 
<a-->Channel these clickstreams into Hadoop using Hadoop Streaming. 
<a-->Sample the weblogs from the web servers, copying them into Hadoop using curl
<q-->
### 35. What is not true about Distributed cache?
<a-->It is used when a file has to be modified by each mapper in a different way.
<a-->None of the rest
<a-->It is used when you want to share files across multiple nodes in a Hadoop Cluster.
<a-->It is used when the files reside as executable “jar” files.
<a-->It is used when file resides as simple “properties” files.
<q-->
### 36. What is true about “Pseudo Distributed” mode?
<a-->All 5 daemons run and output stored in HDFS
<a-->None of the rest
<a-->No daemons run in the background
<a-->All 5 daemons run but there will be only one map task and 1 reduce task in a single JVM
<a-->All 5 daemons run but output is stored in local file system
<q-->
### 37. A combiner reduces:
<a-->The amount of intermediate data that must be transferred between the mapper and reducer. 
<a-->The number of values across different keys in the iterator supplied to a single reduce method call. 
<a-->The number of input files a mapper must process 
<a-->The number of output files a reducer must produce.
<q-->
### 38. Combiners Increase the efficiency of a MapReduce program because: 
<a-->They aggregate intermediate map output locally on each individual machine and therefore reduce the amount of data that needs to be shuffled across the network to the reducers. 
<a-->They aggregate intermediate map output on a small number of nearby (i.e., rack-local) machines and therefore reduce the amount of data that needs to be shuffled across the network to the reducers 
<a-->They provide an optimization and reduce the total number of computations that are needed to execute an algorithm by a factor of n, where is the number of reducer 
<a-->They provide a mechanism for different mappers to communicate with each Other, thereby reducing synchronization overhead
<q-->
### 39. Identify the MapReduce v2 (MRv2 / YARN) daemon responsible for launching application containers and monitoring application resource usage? 
<a-->ApplicationMaster 
<a-->ApplicationMasterService 
<a-->NodeManager 
<a-->ResourceManager 
<a-->JobTracker 
<a-->TaskTracker
<q-->
### 40. Does the MapReduce programming model provide a way for reducers to communicate with each other? 
<a-->No, each reducer runs independently and in isolation 
<a-->Yes, reducers can communicate with each other by dispatching intermediate key value pairs that get shuffled to another reduce 
<a-->Yes, reducers running on the same machine can communicate with each other through shared memory, but not reducers on different machines 
<a-->Yes, all reducers can communicate with each other by passing information through the jobconf object
<q-->
### 41. A client application creates an HDFS file named foo.txt with a replication factor of 3. Identify which best describes the file access rules in HDFS if the file has a single block that is stored on data nodes A, B and C?
<a-->The file can be accessed if at least one of the data nodes storing the file is available 
<a-->The file will be marked as corrupted if data node B fails during the creation of the file 
<a-->Each data node locks the local file to prohibit concurrent readers and writers of the file 
<a-->Each data node stores a copy of the file in the local file system with the same name as the HDFS file
<q-->
### 42. Which type of algorithms are difficult to express as MapReduce? 
<a-->Algorithms that requite global, shared state 
<a-->Algorithms that require applying the same mathematical function to large numbers of individual binary records 
<a-->Large-scale graph algorithms that require one-step link traversal
<a-->Text analysis algorithms on large collections of unstructured text (e.g., Web crawls)
<a-->Relational operations on large amounts of structured and semi structured data
<q-->
### 43. How are keys and values presented and passed to the reducers during a standard sort and shuffle phase of MapReduce? 
<a-->Keys are presented to reducer in sorted order; values for a given key are not sorted.
<a-->Keys are presented to a reducer in random order; values for a given key are not sorted.
<a-->Keys are presented to a reducer in random order; values for a given key are sorted in ascending order. 
<a-->Keys are presented to reducer in sorted order; values for a given key are sorted in ascending order.
<q-->
### 44. What is a SequenceFile? 
<a-->A SequenceFile contains a binary encoding of an arbitrary number key-value pairs. Each key must be the same type. Each value must be same type. 
<a-->A SequenceFile contains a binary encoding of an arbitrary number of homogeneous writable objects.
<a-->A SequenceFile contains a binary encoding of an arbitrary number of heterogeneous writable objects. 
<a-->A SequenceFile contains a binary encoding of an arbitrary number of WritableComparable objects, in sorted order.
<q-->
### 45. What is the behavior of the default partitioner?
<a-->The default partitioner computes the hash of the key and divides that value modulo the number of reducers. The result determines the reducer assigned to process the key-value pair 
<a-->The default partitioner implements a round robin strategy, shuffling the key value pairs to each reducer in turn. This ensures an even partition of the key space 
<a-->The default partitioner assigns key value pairs to reducers based on an internal random number generator 
<a-->The default partitioner computes the hash of the key. Hash values between specific ranges are associated with different buckets, and each bucket is assigned to a specific reducer 
<a-->The default partitioner computes the hash of the value and divides that value modulo the number of reducers. The result determines the reducer assigned to process the key-value pair
<q-->
### 46. Which of the following statements most accurately describes the relationship between MapReduce and Pig? 
<a-->Pig provides the additional capability of allowing you to control the flow of multiple MapReduce jobs 
<a-->Pig programs rely on MapReduce but are extensible, allowing developers to do special-purpose processing not provided by MapReduce 
<a-->Pig provides no additional capabilities to MapReduce. Pig programs are executed as MapReduce jobs via the Pig interpreter 
<a-->Pig provides additional capabilities that allow certain types of data manipulation not possible with MapReduce
<q-->
### 47. In the standard word count MapReduce algorithm, why might using a combiner reduce the overall Job running time? 
<a-->Because combiners perform local aggregation of word counts, thereby reducing the number of key-value pairs that need to be snuff let across the network to the reducers 
<a-->Because combiners perform local aggregation of word counts, thereby reducing the number of mappers that need to run. 
<a-->Because combiners perform local aggregation of word counts, and then transfer that data to reducers without writing the intermediate data to disk. 
<a-->Because combiners perform local aggregation of word counts, thereby allowing the mappers to process input data faster.

